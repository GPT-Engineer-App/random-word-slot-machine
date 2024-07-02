import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { wordsList } from "@/data/wordsList";
import slotMachineImage from "../../public/images/slot-machine.png";

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * wordsList.length);
  return wordsList[randomIndex];
};

const Index = () => {
  const [word, setWord] = useState(null);

  const handlePullLever = () => {
    const randomWord = getRandomWord();
    setWord(randomWord);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-gray-800">Machine à sous pour mots aléatoires</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <img src={slotMachineImage} alt="Slot Machine" className="mb-4 w-64 h-64" />
          <p className="mb-4 text-center text-lg text-gray-600">Appuyez pour obtenir un mot aléatoire et sa définition !</p>
          <Button onClick={handlePullLever} className="mb-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Appuyer</Button>
          {word && (
            <div className="text-center mt-4 p-4 bg-yellow-100 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800">{word.word}</h2>
              <p className="text-lg text-gray-700">{word.definition}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;