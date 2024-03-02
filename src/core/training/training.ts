// Training package

import { Organize, WordsBag } from './analysis'; // Import necessary functions/types from analysis module
import { Network, CreateNetwork, LoadNetwork } from './network'; // Import necessary functions/types from network module
import { Index } from '../util/slice';

// TrainData returns the inputs and outputs for the neural network
function TrainData(locale: string): [number[][], number[][]] {
    const { words, classes, documents } = Organize(locale);

    let inputs: number[][] = [];
    let outputs: number[][] = [];

    for (const document of documents) {
        const outputRow: number[] = Array(classes.length).fill(0);
        const bag: number[] = WordsBag(document.sentence, words);

        // Change value to 1 where there is the document Tag
        outputRow[Index(classes, document.tag)] = 1;

        // Append data to inputs and outputs
        inputs.push(bag);
        outputs.push(outputRow);
    }

    return [inputs, outputs];
}

// CreateNeuralNetwork returns a new neural network which is loaded from res/training.json or
// trained from TrainData() inputs and targets.
function CreateNeuralNetwork(locale: string, ignoreTrainingFile: boolean): Network {
    // Decide if the network is created by the save or is a new one
    const saveFile: string = `res/locales/${locale}/training.json`;

    try {
        require('fs').openSync(saveFile);
    } catch (err) {
        // Train the model if there is no training file
        if (ignoreTrainingFile) {
            const [inputs, outputs] = TrainData(locale);

            let neuralNetwork = CreateNetwork(locale, 0.1, inputs, outputs, 50);
            neuralNetwork.train(200);

            // Save the neural network in res/training.json
            neuralNetwork.save(saveFile);
            return neuralNetwork;
        }
    }

    console.log(`Loading the neural network from ${saveFile}`);
    // Initialize the intents
    // Assuming SerializeIntents is a function to initialize intents
    // analysis.SerializeIntents(locale);
    return LoadNetwork(saveFile);
}
