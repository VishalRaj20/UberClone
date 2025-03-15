const captainModel = require('../models/captain.model.js');

module.exports.createCaptain = async ({
    firstname, lastname, email, password,
    color, capacity, plate, vehicleType
}) => {
    if (!firstname || !email || !password 
        || !color || !capacity || !plate || !vehicleType
    ) {
        throw new Error('All fields are required');
    }
    const captain = captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            capacity,
            plate,
            vehicleType
        }
    })
    return captain;
};