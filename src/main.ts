import confetti from "canvas-confetti";

const NAME = import.meta.env.VITE_NAME as string;
const friendName = document.getElementById("friendName")!;
const confettiBtn = document.getElementById("confettiBtn") as HTMLButtonElement;

friendName.textContent = NAME;
document.title = import.meta.env.VITE_TITLE as string;

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
