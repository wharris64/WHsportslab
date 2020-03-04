    class Team extends React.Component{
        constructor(props){
            super(props)

            this.state = {
                shots: 0,
                score: 0
            }

        }
  
            





        
        render() {
            const shotPercentage = Math.round((this.state.score / this.state.shots) * 100)
            let shotPercentageDiv = <div>Field Goal Average:{shotPercentage}</div>
            
            return(
                <div className="Team">
                    <h2>{this.props.name}</h2>
            <div>Shots taken:{this.state.shots}</div>
            <div>Score:{this.state.score}</div>
            {shotPercentageDiv}
               <button onClick={this.shoot}><strong>Make a play</strong></button> 
                </div>
            )
        }
    }

    function Game(props) {
        constructor(props) {
            super(props)
        
           
                this.state = {
                    homeTeamStats: {
                      shots: 0,
                      score: 0
                    },
                    visitingTeamStats: {
                      shots: 0,
                      score: 0
                    }
            }
            this.shotSound = new Audio('./assets/audio/BackBoard.wav')
            this.scoreSound = new Audio('./assets/audio/Swish.wav')
        }
        shoot = (Team) =>{
            let score = this.state.score
            
            
            if (Math.random() > 0.5){
                this.scoreSound.play()
                score += 1
            }
            else{
                this.shotSound.play()
                score = score
            }

            this.setState((state, props) =>({
                shots:this.state.shots + 1,
                score
            })
          )
        }
          render(){
        return(    
        
        <div className = "Game">
            <h1>Hallo frends welcome to {props.venue}</h1>
            <div>
                <h3>Away</h3>
            <Team 
                
                 name={props.visitingTeam.name}
                 logo= {props.visitingTeam.logoSrc}
                 stats={this.state.visitingTeamStats}
            />
            </div>
          <div className="Versus"><h3>V.S.</h3></div>
            <div>
                <h3>Home</h3>
            <Team 
               
                name = {props.homeTeam.name}
                logo= {props.homeTeam.logoSrc}
                stats={this.state.homeTeamStats}
                />
                </div>
                </div>
    
            )

    }
};

// Deafault App component that all other compents are rendered through
function App(props) {
    const bats = {
    name:"The Batmen",
    logoSrc: "./assets/images/thebat.jpeg"
}

    const Synths ={
        name: "The Synths",
        logoSrc: "./assets/images/courser.png"
    }

    return (
      <div className="App">
        <Game venue="The Batcave"
            homeTeam = {bats}
            visitingTeam = {Synths}
         />
         <hr/>
         <Game venue="The Institute"
                homeTeam={Synths}
                visitingTeam={bats}
        />
      </div>
    )
  }

//Render the application
ReactDOM.render(
  <App />,
  document.getElementById('root')
);