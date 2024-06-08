import studentsDAO from "../dao/studentsDAO.js"

export default class UsersCtrl {
    static async apiGetStudents(req, res, next) {
        let filters = {}
        if (req.query.email) {
            filters.email = req.query.email
        }

        const { studentsList, totalNumStudents } = await studentsDAO.getStudents({
            filters,
        })

        let response = {
            students: studentsList, 
            filters: filters, 
            total_results: totalNumStudents, 
        }
        
        res.json(response)
    }

    static async apiGetUserByEmail(req, res, next) {
        try {
            let email = decodeURIComponent(req.params.email) || {}
            let student = await studentsDAO.getStudentByEmail(email)

            if (!student) {
                res.status(404).json({ error: "Not found bro" })
                return
            }

            res.json(user)
        } catch(e) {
            console.log(`api, ${e}`)
            res.status(500).json({ error: e })
        }
    }

    static async apiPostUser(req, res, next) {
        try {
            const firstName = req.body.firstName
            const lastName = req.body.lastName
            const email = req.body.email
            const bio = req.body.bio
            const videoURL = req.body.videoURL
            const linkedinURL = req.body.linkedinURL
            const classroomURL = req.body.classroomURL
            // const contracts = req.body.contracts

            const EventResponse = await UsersDAO.addUser(
                firstName,
                lastName,
                email,
                videoURL,
                linkedinURL,
                classroomURL,
                bio,
                // contracts,
            )
            
            //res.json({ status: "success" })
            res.json(EventResponse)
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }
}