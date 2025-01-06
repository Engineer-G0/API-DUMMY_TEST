const { Rab, Total, User } = require('../models');

const createRab = async (params) => {
    const { user_id, group_id, work_items, vol, unit, selling_price, qty_update, status, process } = params;

    // Cek apakah Rab sudah ada
    const checkRab = await Rab.findOne({ where: { work_items } });
    const uploader = await User.findOne({
        where:{
            id:user_id
        }
    });

    if (checkRab) throw new Error('Rab already exists');

    // Buat entri baru di tabel Rab
    const rab = await Rab.create({
        group_id,
        work_items,
        vol,
        unit,
        selling_price,
        qty_update,
        process,
        status,
        user:uploader.username,
    });

    if (!rab) throw new Error('Failed to create Rab');

    // Buat entri terkait di tabel Total
    await Total.create({
        group_id: rab.group_id,
        rab_id: rab.id,
        total: selling_price
    });

    // Ambil semua data Total terkait dengan rab_id
    const getTotal = await Total.findAll({ 
        where: { 
            group_id 
        } 
    });

    // Jika lebih dari 1 entri, jumlahkan semua total
    let totalSum = 0;
    if (getTotal.length > 1) {
        totalSum = getTotal.reduce((accumulator, item) => accumulator + item.total, 0);
    } else {
        totalSum = selling_price; // Jika hanya satu entri, total sama dengan selling_price
    }

    return {
        rab,
        totalSum
    };
};

const getAllRab = async () => {
    const rab = await Rab.findAll();
    
    if(!rab) throw new Error('Rab not found');

    return rab;
}

module.exports = {
    createRab,
    getAllRab
}