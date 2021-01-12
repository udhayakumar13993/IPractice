//Move zeros to right end

const moveZeroes=(arr)=>{

let i=0;
//push the array elements to the values
for(let j=0;j<arr.length;j++){
if(arr[j]!=0){
	arr[i]=arr[j];
	i=i+1;
	}
	}
	for(let k=i;k<arr.length;k++)
	{
	arr[k]=0;
	}
	return arr;
	}	