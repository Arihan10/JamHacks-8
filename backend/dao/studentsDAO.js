import mongodb from 'mongodb';

const ObjectId = mongodb.ObjectId;

let students;

export default class StudentsDAO {
	static async injectDB(conn) {
		if (students) return;

		try {
			students = await conn.db(process.env.DB_NS).collection('students');
		} catch (e) {
			console.error(
				`Unable to establish a collection handle in studentsDAO: ${e}`
			);
		}
	}

	static async getStudents({ filters = null } = {}) {
		let query;
		if (filters) {
			if ('email' in filters) {
				query = { $text: { $search: filters['email'] } };
			}
		}

		let cursor;

		try {
			cursor = await students.find(query);
		} catch (e) {
			console.error(`Unable to find issue command, ${e}`);
			return { studentsList: [], totalNumStudents: 0 };
		}

		try {
			const studentsList = await cursor.toArray();
			const totalNumStudents = await students.countDocuments(query);

			return { studentsList, totalNumStudents };
		} catch (e) {
			console.error(
				`Unable to convert cursor to array or problem counting documents, ${e}`
			);

			return { studentsList: [], totalNumStudents: 0 };
		}
	}

	static async getStudentByEmail(email) {
		try {
			email = email.toLowerCase();
			console.log(email);

			const pipeline = [
				{
					$match: {
						email: email,
					},
				},
			];

            return await students.aggregate(pipeline).next(); 
        } catch (e) {
            console.error(`Something went wrong in getStudentByEmail: ${e}`)
            throw e
        }
    }

	static async addStudent(firstName, lastName, email, videoURL, linkedinURL, classroomURL, bio) {
		try {
			const studentDoc = {
				username: username,
				email: email.toLowerCase(),
				firstName: firstName,
				lastName: lastName,
				videoURL: videoURL,
				linkedinURL: linkedinURL,
				classroomURL: classroomURL,
				bio: bio,
				investorComments: [],
				investorNames: [],
				// contracts: contracts,
				contracts: [],
			};

			return await students.insertOne(studentDoc);
		} catch (e) {
			console.error(`Unable to create student: ${e}`);
			return { error: e };
		}
	}

    static async addContract(email, contract) {
        try {
            const updateResponse = await students.updateOne(
                {
                    email: email,
                }, 
                { $push: {
                    contract: contract,
                }}
            )
        } catch (e) {
            console.error(`Unable to update student: ${e}`)
            return { error: e }
        }
    }

    static async getStudentContracts(email) {
        try {
            const studentResponse = await this.getStudentByEmail(email)
        } catch (e) {
            console.error(`Something went wrong in getStudentContracts: ${e}`)
            throw e
        }
    }
}
