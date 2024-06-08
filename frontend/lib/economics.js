function createContract(contract, userId, receiverId) {
    fetch('http://localhost:5000/contract', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: userId,
            contract: {
                loanAmount: contract.amount,
                interest: contract.interest,
                date: contract.date,
                receiverId: receiverId
            }
        })
    })

}