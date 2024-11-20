import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(express.json()); // Utilisation native de express pour parser JSON
app.use(cors());

// Définir un type explicite pour le corps de la requête
interface RequestBody {
    weight: number;
    height: number;
}

// Fonction pour calculer le BMI
function calculateBmi(weight: number, height: number): number {
    return weight / (height * height);
}

// API route for BMI calculation
// app.post('/api/calculate-bmi', (req: Request, res: Response) => {
//     console.log(req.body);
//     const { weight, height }: RequestBody = req.body;

//     if (!weight || !height) {
//         return res.status(400).json({ error: 'Weight and height are required!' });
//     }

//     // Utilisation de la fonction calculatrice pour séparer la logique
//     const bmi = calculateBmi(weight, height);
//     res.json({ bmi });
// });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
