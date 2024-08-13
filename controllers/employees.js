const { log } = require("debug/src/browser")
const { prisma } = require ("../prisma/prisma-client")

/**
 * @route GET /api/employees
 * @desc get all employees
 * @access private
 */

const all = async (req, res)=> {
    try {
        const employees = await prisma.employee.findMany()
        res.status(200).json(employees)
    } catch(error) {
        res.status(400).json({message: "Не удалось найти сотрудников"})
    }
}

/**
 * @route GET /api/employees/add
 * @desc add new employee
 * @access private
 */
const add = async (req, res) => {
    try {
        const data = req.body
        if (!data.firstName || !data.lastName || !data.address || !data.age) {
            return res.status(400).json({message: " Все поля обязательные"})
        }

       const employee = await prisma.employee.create({
            data: {
              ...data,
              userId: req.user.id,
            }
        })
        return res.status(200).json(employee)

    } catch(error) {
        res.status(500).json({message: "что то пошло не так"})
    }
}

/** 
 * @route POST /api/employees/remove
 * @desc удаление сотрудника
 * @access private
 */

const remove = async(req, res) => {
    const { id } = req.body
    try {
        await prisma.employee.delete( {
            where: {
                id
            }
        }) 
        res.status(204).json( {message: "Успешно удален"} )
    }catch(error) {
        return res.status(500).json({message: "сотрудниик не найден"})
    }
}


/** 
 * @route POST /api/employees/edit
 * @desc редактирование сотрудника
 * @access private
 */

const edit = async (req, res)=> {
    const data = req.body
    const id = data.id

    try {
        await prisma.employee.update( {
            where: {
                id },
                data
        })
        res.status(204).json({message: "Успешно изменен"})
    } catch(err) {
        return res.status(500).json({message: "неудалось редактировать сотрудника"})
    }
}

/** 
 * @route GET /api/employees/:id
 * @desc получение сотрудника
 * @access public
 */
const employee = async (req, res) => {
    const { id } = req.params

    try {
        const employee = await prisma.employee.findUnique( {
            where: {
                id
            }
        })
        if( employee !== null) {
            res.status(200).json(employee)
        } else {
            res.status(404).json({
                message: "пользователь не найден с таким id"
            })
        }
    } catch(error) {
        return res.status(500).json({message: "неудалось получить сотрудника"})
    }
}


module.exports = {
    all,
    add,
    remove,
    edit,
    employee
}