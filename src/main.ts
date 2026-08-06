import confetti from "canvas-confetti";

type EnvVar = string | undefined;

const greeting = document.getElementById("greeting")!;
const friendName = document.getElementById("friendName")!;
const confettiBtn = document.getElementById("confettiBtn") as HTMLButtonElement;

greeting.textContent = import.meta.env.VITE_GREETING as EnvVar || "Happy Birthday,";
friendName.textContent = import.meta.env.VITE_NAME as EnvVar || "Someone";
document.title = import.meta.env.VITE_TITLE as EnvVar || "Happy Birthday";
document.documentElement.lang = import.meta.env.VITE_LANG as EnvVar || "en";

async function fireConfetti(): Promise<void> {
    await confetti({
        particleCount: 150,
        spread: 140,
        origin: { y: 0.6 },
        startVelocity: 50,
        gravity: 1.3,
    });
}

// eslint-disable-next-line @typescript-eslint/no-misused-promises
confettiBtn.addEventListener("click", async() => {
    await fireConfetti();
});

await fireConfetti();
