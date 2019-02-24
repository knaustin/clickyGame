import React, { Component } from "react";
import Card from "../Card"
import characters from "../../gamecards.json"
import Navbar from "../Navbar"
import Header from "../Header"
import Container from "../Container"


class Game extends Component {

    state = {
        score: 0,
        highScore: 0,
        characters,
        clickedList: []
    }

    shuffle = () => {
        for (var i = characters.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = characters[i];
            characters[i] = characters[j];
            characters[j] = temp;
        }
        console.log(this.characters)
        return;

    }

    handleClick = (id) => {
        let { score, clickedList, highScore } = this.state;
        const isClicked = clickedList.includes(id);


        if (isClicked) {
            this.setState({
                highScore: (score > highScore ? score : highScore),
                score: 0,
                clickedList: []
            })
        } else {

            this.setState({
                score: score + 1,
                clickedList: [...clickedList, id]
            })
        }
        this.shuffle()
    }


    render() {
        return (
            <div>
                <Navbar><div className="alignleft"><h1>Score: {this.state.score}</h1>
                    <h1>Highscore: {this.state.highScore}</h1></div></Navbar>
                <Header />
                <Container>
                    {characters.map((char) => (
                        <Card
                            name={char.name}
                            image={char.image}
                            key={char.id}
                            id={char.id}
                            handleClick={this.handleClick}
                            shuffle={this.shuffle}
                            />
                    ))}
                </Container>
            </div>
        )
    }
}


export default Game;