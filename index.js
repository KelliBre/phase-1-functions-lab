// Code your solution in this file!

const headQuarters = 42;
function distanceFromHqInBlocks (address){
    if(address > 42){
        return address - headQuarters
    }else{
        return headQuarters - address
    }
}


function distanceFromHqInFeet(address){
    return distanceFromHqInBlocks(address) * 264;

};

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if(start > destination){
        const upTown = start - destination;
        return upTown * 264
    }else{
        const downTown = destination - start;
        return downTown * 264
    }
  }

  function calculatesFarePrice(start, destination) {
    const distance  = distanceTravelledInFeet(start, destination);
    if( distance <= 400){
        return 0
    } else if (distance > 400 && distance < 2000){
        return (distance - 400) * .02;
    }else if(distance> 2000 && distance < 2500){
        return 25
    }else if (distance >= 2500){
        return 'cannot travel that far'
    }

  }
