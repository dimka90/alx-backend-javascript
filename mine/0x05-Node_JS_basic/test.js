function myeach(array, callback)
{
    const val = []
for (i = 0; i<array.length; i++)
    {
        const return_val = callback(array[i])

        val.push(return_val)

    }

    return val
}


const courses = [2, 3, 4, 2];
const result = myeach(courses, (item)=> (item * 4)) 

console.log(result)