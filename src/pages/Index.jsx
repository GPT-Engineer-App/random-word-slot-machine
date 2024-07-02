import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { wordsList } from "@/data/wordsList";

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
          <p className="mb-4 text-center text-lg text-gray-600">Tirez le levier pour obtenir un mot aléatoire et sa définition !</p>
          <Button onClick={handlePullLever} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Tirer le levier</Button>
          {word && (
            <div className="text-center mt-4 p-4 bg-yellow-100 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800">{word.word}</h2>
              <p className="text-lg text-gray-700">{word.definition}</p>
              <p className="text-sm text-gray-500 mt-2">Pourquoi ce mot a été choisi: {word.reason}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;