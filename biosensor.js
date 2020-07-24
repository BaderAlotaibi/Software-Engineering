class Biosensor
  {
     constructor(name)
     {
         
            this.owner=name;
            this.heartRate=0;
            this.live()
       
     }

     generatRandomBetween(min ,max)
     {
        return parseInt(Math.random() * (max -min ) + min );
       
     }


    generateHearBeat()
    {
      let heartBeat=this.generatRandomBetween(70,80);
      this.heartRate=heartBeat;
      console.log('[owner]:'+ this.owner + '---- [HR] '+ this.heartRate)
    }

    // Living Function initiate an endless interval to generate a beat
    live()
    {
        setInterval(()=>{this.generateHearBeat()},1000 );

    }
  }

  let Bader= new Biosensor("bader")
  let Melisa= new Biosensor("melisa")