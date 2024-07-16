'use client'

import { Input } from "@/components/ui/input"
import { useGT, Branch } from "gt-react/client";
import { useState } from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function NameAndGender() {

    const t = useGT();
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    const handleSelectChange = (value) => {
        setGender(value);
    };

    return (
        <div>
            <Input type="name" onChange={handleInputChange} placeholder={t('name.input')} />
            <br/>
            <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t('gender.selector')} />
                </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                <SelectItem value="female">{t('female')}</SelectItem>
                <SelectItem value="male">{t('male')}</SelectItem>
                <SelectItem value="other">{t('other')}</SelectItem>
                <SelectItem value="noresponse">{t('prefer not to say')}</SelectItem>
                </SelectGroup>
                </SelectContent>
            </Select>
            <br/>
            { name && <p className="leading-7 mb-3">
                 <Branch name={name} gender={gender} branches={{
                    gender: {
                        male: t('customer.male'),
                        female: t('customer.female')
                    }
                }}>
                    {t('customer.default')}
                </Value>
            </p> }
        </div>
    )
}