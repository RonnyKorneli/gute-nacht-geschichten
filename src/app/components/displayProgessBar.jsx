
function ProgressBar({ bgColor, completed }) {

   console.log(completed)

    const progressBarContainer = {
       width:"300px",
       height:"20px",
       marginTop: "10px",
       border:"none",
       borderRadius:"10px",
       backgroundColor:"#4C4556",
       display:"flex",   
    }
 
    const progressBarColor = {
       width: completed+ "%",
       height:"20px",
       borderRadius:"10px",
       backgroundColor: bgColor,
       display:"flex",
       justifyContent:"end",
       fontSize:"10px",
       alignItems:"center",
       paddingRight:"10px"
    }
 
   return (
     <>
       <div style={progressBarContainer}>
          <div style={progressBarColor}>
             <span>{completed}%</span>
          </div>
       </div>
     </>
   );
 }
 
 export default ProgressBar