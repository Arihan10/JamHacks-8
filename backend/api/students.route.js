import express from "express"
import StudentsCtrl from "./student.controller.js"

const router = express.Router()

router.
    route("/")
    .get(StudentsCtrl.apiGetStudents)
    .post(StudentsCtrl.apiPostUser)

route.route("/email/:email").get(StudentsCtrl.apiGetUserByEmail)