const Student = require('../models/student.model');

//CRUD
//*Create
//*Read
//*Update
//*Delete

//Método para crear un estudiante

module.exports.createStudent = (req, res) => {
    const { body } = req;
    Student.create(body)
        .then(student => res.json({ student }) )
        .catch(err => res.status(500).json({error: err}))
};


//Método para encontrar un estudiante por su ID
module.exports.getOneStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        return res.json({ student });

    } catch(err) {
        return res.status(404).json({ error: err });
    }
}



//Método para traer todos los estudiante
module.exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        return res.json({ students });

    } catch(err) {
        return res.status(500).json({error: err});
    }
        
}


//Método para borrar un estudiante
module.exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        await Student.deleteOne({_id: id});
        return res.json({response: "Estudiante eliminado exitosamente"})
    } catch(err) {
        res.json(500).json({ error: err });
    }
}



//Método para edita o actualizar un estudiante
module.exports.editEstudent = async (req, res) => {
    try {
        const { params, body } = req;
        const student = await Student.findOneAndUpdate({_id: params.id}, body, { new: true, runValidators: true })
        return res.json({ student });

    } catch(err) {
        res.status().json({ error: err });
    }
}