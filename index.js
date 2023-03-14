// Code your solution in this file!
function  distanceFromHqInBlocks(distInblocks)
{
const headquatersInBlock = 42
if (distInblocks > headquatersInBlock)
{
    return distInblocks - headquatersInBlock
}
else {return headquatersInBlock-distInblocks
}

}

function distanceFromHqInFeet(feet)
{
  const x = distanceFromHqInBlocks(feet)*264
  return x;
}

function distanceTravelledInFeet(start,destination){
let x
    if( destination>start){
     x=(destination - start)*264
    return x}
    else 
    {x=(start-destination)*264
    return x;
    }
 }

function calculatesFarePrice(start, destination){
    let x =distanceTravelledInFeet(start,destination)
 if(x <=400){
 return 0;}
 else if(x < 2000) {
    return (x -400)*0.02;}
    else if(x <2500){
    return 25;}
        else 
        {return 'cannot travel that far'
    }
}


 
