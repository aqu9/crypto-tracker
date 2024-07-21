"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"


export function CryptoDropdownMenuCheckboxes({ crypto, allCryptoList }) {
    const router = useRouter()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="font-bold">{crypto} <ChevronDown /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                {allCryptoList?.map((elem, index) => {
                    return (<div key={index}>
                        <DropdownMenuCheckboxItem
                            checked={elem?.code === crypto}
                            onClick={() => {
                                router.push(`/detail/${elem.code}`)
                            }}

                        >
                            {elem?.code}


                        </DropdownMenuCheckboxItem>
                        {allCryptoList?.length - 1 !== index &&
                            <DropdownMenuSeparator />
                        }


                    </div>)
                })}
                {/* <DropdownMenuCheckboxItem
                    checked={showPanel}
                    onCheckedChange={setShowPanel}
                >
                    Panel
                </DropdownMenuCheckboxItem> */}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
