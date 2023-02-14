
import React, { useEffect , useState} from "react";
import Web3 from 'web3';


function Main() {
  
   var url = "https://tiniest-icy-diamond.discover.quiknode.pro/92aec0ae5b783d3066424796421b50dd718ffd14/"
   
   var provider = new Web3.providers.HttpProvider(url);
   var web3= new Web3(provider)

   const [number, setNumber]= useState(null);
   const [hash , setHash] = useState(null);
   const [time , setTime] = useState(null);


   useEffect ( () => {
    const blocknumber = async () => {
      var data = await web3.eth.getBlockNumber()

      for (var i =0 ; i < 1 ; i++){
        var block = web3.eth.getBlock(data - i);
        var number = (await block).number;
        var hash = (await block).hash;
        var time = (await block).timestamp;
 
      setNumber(number);
      setHash(hash);
      setTime(time); 
      }
    }  
     blocknumber()
   },[])


  
  
    return (
        <div className="flex justify-center">
   <table className="table-auto shadow-lg bg-white w-4/5 text-center" >
  <thead className=" bg-gray-800 border-b">
    <tr>
      <th scope="col" className="text-center  px-8 py-4 font-medium text-white">#</th>
      <th scope="col" className="text-center  px-8 py-4 font-medium text-white">hash </th>
      <th scope="col" className="text-center px-8 py-4 font-medium text-white">timestamp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{number}</td>
      <td>{hash}</td>
      <td>{time}</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default Main;