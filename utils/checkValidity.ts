function checkValidity(val:any):any {
        if (!val) {
            return new Error('Invalid input')
        }
        if (val === []) {
            return new Error('invalid input')
        }
}

export default checkValidity