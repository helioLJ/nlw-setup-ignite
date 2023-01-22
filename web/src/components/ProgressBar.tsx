interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props: ProgressBarProps) {
  return (
    <div
      role="progressbar"
      aria-label="Progresso de hábitos completados nesse dia."
      aria-valuenow={props.progress}
      className="h-3 rounded-xl bg-violet-600 transition-all"
      style={{ width: `${props.progress}%` }}
    />
  )
}

{/* 
import * as Progress from '@radix-ui/react-progress';

  <Progress.Root className="relative overflow-hidden bg-zinc-700 rounded-xl w-[300px] h-[12px] mt-4" value={65}>
    <Progress.Indicator
      className="bg-violet-600 w-full h-full"
      style={{ transform: `translateX(-${100 - 90}%)` }}
    />
  </Progress.Root> */}