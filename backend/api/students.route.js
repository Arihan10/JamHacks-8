import express from "express"
import StudentsCtrl from "./student.controller.js"

const router = express.Router()

router.
    route("/")
    .get(StudentsCtrl.apiGetStudents)
    .post(StudentsCtrl.apiPostUser)

router.route("/email/:email").get(StudentsCtrl.apiGetUserByEmail)

router.route("/contract").put(StudentsCtrl.apiPostContract)

export default router