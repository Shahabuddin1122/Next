"use client"
import {useDraw} from "@/hooks/useDraw";
import { ChromePicker } from 'react-color'
import {useState} from "react";

export default function Home() {
    const [color, setColor] = useState<string>('#000')
    const {canvasRef, onMouseDown, clear} = useDraw(drawLine)

    function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
        const { x: currX, y: currY } = currentPoint
        const lineColor = color
        const lineWidth = 5

        let startPoint = prevPoint ?? currentPoint
        ctx.beginPath()
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = lineColor
        ctx.moveTo(startPoint.x, startPoint.y)
        ctx.lineTo(currX, currY)
        ctx.stroke()

        ctx.fillStyle = lineColor
        ctx.beginPath()
        ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI)
        ctx.fill()
    }

    return (
        <>
            <div className={'w-full h-screen bg-white flex gap-x-2 justify-center items-center'}>
                <div className={'flex flex-col gap-y-5'}>
                    <ChromePicker color={color} onChange={(e)=>setColor(e.hex)} />
                    <button type={"button"} className={"p-2 border rounded-md border-black"} onClick={clear} >Clear canvas</button>
                </div>
                <canvas
                    ref={canvasRef}
                    onMouseDown={onMouseDown}
                    width={600}
                    height={600}
                    className={'border border-black rounded-md'}
                />
            </div>
        </>
    );
}
