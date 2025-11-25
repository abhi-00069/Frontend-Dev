class FitnessAnalytics {
  constructor(data) {
    if (data.length === 0) throw new Error("Dataset empty");
    this.data = data;
  }

  getActiveUsers() {
    return this.data.filter(u => u.steps > 7000);
  }

  getAverageCalories() {
    const total = this.data.reduce((sum, u) => sum + u.calories, 0);
    return total / this.data.length;
  }

  getUserSummary() {
    return this.data.map(u => `${u.user} burned ${u.calories} calories with ${u.steps} steps`);
  }
}

const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

try {
  const fa = new FitnessAnalytics(workoutData);
  console.log(fa.getActiveUsers());
  console.log(fa.getAverageCalories());
  console.log(fa.getUserSummary());
} catch (e) {
  console.log("Error:", e.message);
}
