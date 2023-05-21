function minPlanes(arr,n)
 
{
    if (n <= 1){
        return 0
    }
 
    // Return -1 if not have sufficient fuel unit
    if (arr[0] == 0){
        return -1
    }

    // stores all time the maximal reachable index in the array.
    let maxReach = arr[0]

    // stores the units of fuel we can have
    let fuel = arr[0]

    // stores the number of planes necessary to reach the last airport.
    let plane = 1
    // Start traversing array
 
    for (let i = 1; i < n; i++) {
 
        // Check if we have reached the end of the array
 
        if (i == n - 1){
            return plane
        }

        // updating maxReach
        maxReach =Math.max(maxReach, i + arr[i]) 
        
        fuel--

        // If no further fuels left
        if (fuel == 0) {

            // we must have used a plane
            plane++
            // Check if the current index/position or lesser index is the maximum reach point from the previous indexes
 
            if (i >= maxReach){
                return -1
            }
            // re-initialize the fuels unit
            fuel = maxReach - i
        }
    }
    return -1
}
    const arr = [ 1,6,3,4,5,0,0,0,6]

    const size = arr.length
    
    console.log(minPlanes(arr, size))
    
    const arr2 =  [2,1,2,3,1]
    
    const size2 = arr2.length
    
    console.log(minPlanes(arr2, size2))