import WordRotate from "@/components/ui/word-rotate"

export function WordRotateDemo() {
    const textArray = [
        "24/7 Dedicated Account Management|",
        "Fast First Reliable|",
        "One stop solution for primary transportation|"
    ];
    return (
        <WordRotate
            className="w-full text-center pt-20 pb-[110px] text-5xl font-bold text-white dark:text-black"
            words={textArray}
        />
    );
}
