const raw = items[0].json.output;

// Supprimer les balises ```json et les sauts de ligne
const cleaned = raw.replace(/```json\n|```/g, '').trim();

// Parser le JSON
const parsed = JSON.parse(cleaned);

// Retourner les champs séparément
return [
  {
    json: {
      reasoning: parsed.reasoning,
      delegation: parsed.delegation,
      result: parsed.result.message
    }
  }
];
