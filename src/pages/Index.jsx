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
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Slot Machine for Random Words</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <p className="mb-4 text-center">Pull the lever to get a random word and its definition!</p>
          <Button onClick={handlePullLever} className="mb-4">Pull Lever</Button>
          {word && (
            <div className="text-center">
              <h2 className="text-xl font-bold">{word.word}</h2>
              <p>{word.definition}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;