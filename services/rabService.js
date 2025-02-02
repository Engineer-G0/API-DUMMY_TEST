const { Rab, Total, Last_qty_update, Group} = require("../models");
const createRab = async (params) => {
  const {
    group_id,
    work_items,
    vol,
    unit,
    selling_price,
    status,
    process,
  } = params;

  const getGroup = await Group.findAll({
    where:{
      id:parseInt(group_id)
    }
  });

  const group = getGroup[0];

  // Cek apakah Rab sudah ada
  const checkRab = await Rab.findOne({ 
    where: { 
      work_items 
    } 
  });

  if (checkRab) throw new Error("Rab already exists");

  // Buat entri baru di tabel Rab
  const rab = await Rab.create({
    group_id,
    type_report_s_curve_id:group.type_report_s_curve_id,
    project_id:group.project_id,
    company_id:group.company_id,
    work_items,
    vol,
    unit,
    selling_price,
    qty_update: 0,
    total: 0,
    status,
    process,
  });

  if (!rab) throw new Error("Failed to create Rab");

  // Buat entri terkait di tabel Total
  await Total.create({
    group_id: rab.group_id,
    rab_id: rab.id,
    total: selling_price,
  });

  // Ambil semua data Total terkait dengan rab_id
  const getTotal = await Total.findAll({
    where: {
      group_id,
    },
  });

  // Jika lebih dari 1 entri, jumlahkan semua total
  let totalSum = 0;
  if (getTotal.length > 1) {
    totalSum = getTotal.reduce(
      (accumulator, item) => accumulator + item.total,
      0
    );
  } else {
    totalSum = selling_price; // Jika hanya satu entri, total sama dengan selling_price
  }

  return {
    rab,
    totalSum,
  };
};

const getAllRab = async () => {
  const rab = await Rab.findAll();

  if (!rab) throw new Error("No rab exist");

  return rab;
};

const getRabByGrupId = async (params) => {
  const group_id = parseInt(params);

  const rab = await Rab.findAll({
    where: {
      group_id,
    },
  });

  if (!rab) throw new Error("Rab not found");

  let getQtyUpdate = await Last_qty_update.findAll({
    where:{
      group_id
    },
    order: [['id', 'DESC']],
    limit:1,
  });

  if(!getQtyUpdate.length){
    getQtyUpdate = Array(rab.length).fill(0);
  }

  return {
    rab,
    getQtyUpdate
  };
};

const updateRab = async (params) => {
  const { id, work_items, vol, unit, selling_price, qty_update, process } =
    params;

  const checkRab = await Rab.findOne({
    where: {
      id,
    },
  });

  if (!checkRab) throw new Error("Rab not found");

  const update = await Rab.update(
    {
      work_items,
      vol,
      unit,
      selling_price,
      qty_update,
      process,
    },
    {
      where: {
        id,
      },
    }
  );

  if (!update) throw new Error("Failed Update Rab");

  const findRab = await Rab.findOne({
    where: {
      id,
    },
  });

  return findRab;
};

const deleteRab = async (params) => {
  const id = params;

  const rab = await Rab.destroy({
    where: {
      id,
    },
  });

  if (!rab) throw new Error("Rab not found");

  return { message: "delete success" };
};

module.exports = {
  createRab,
  getAllRab,
  getRabByGrupId,
  updateRab,
  deleteRab,
};