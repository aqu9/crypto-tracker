import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

export default function CryptoDetailTable({ cryptoDetail }) {
    return (
        <Table className="border rounded-lg border-gray-300">
            <TableHeader>
                <TableRow>
                    <TableHead className="text-white font-bold">Time Stamp</TableHead>
                    <TableHead className="text-white font-bold">Volume</TableHead>
                    <TableHead className="text-white font-bold">Cap</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {cryptoDetail?.detail?.map((crypto, index) => (
                    <TableRow key={index} className={cn("", index === 0 && "bg-gray-800")}>
                        <TableCell className="font-medium">{crypto?.createdAt ? new Date(crypto?.createdAt).toISOString() : new Date().toISOString()}</TableCell>
                        <TableCell>{crypto?.volume}</TableCell>
                        <TableCell>{crypto?.cap}</TableCell>
                        <TableCell className="text-right text-pink-200 font-bold">{crypto?.rate}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
