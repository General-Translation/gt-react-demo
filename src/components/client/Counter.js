'use client'

import { Button } from "@/components/ui/button"

import { useGT, Numeric } from "gt-react/client"
import { useState } from "react"

export default function Counter() {
    const t = useGT();
    const [count, setCount] = useState(1)
    
    return (
        <div>
            <p className="leading-7 mb-3">
                <Numeric
                    n={count}
                    singular={t('counter.singular')}
                    dual={t('counter.dual')}
                    zero={t('counter.zero')}
                >
                    {t('counter.default')}
                </Numeric>
            </p>
            <Button variant="secondary" onClick={() => {setCount(prev => prev + 1)}}>{t('add')}</Button>
            {" "}
            <Button variant="secondary" onClick={() => {setCount(prev => prev - 1)}}>{t('subtract')}</Button>
        </div>
    )
}