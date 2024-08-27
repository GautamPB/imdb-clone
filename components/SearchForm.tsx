'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

const SearchForm = () => {
    const router = useRouter()

    // Search query form
    const formSchema = z.object({
        searchTerm: z.string().min(2).max(50),
        searchType: z.string().min(2).max(10),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            searchTerm: '',
            searchType: 'All',
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values.searchType, values.searchTerm)
        router.push(
            `/search/${values.searchTerm}?category=${values.searchType}`
        )

        form.reset()
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="text-black w-full space-x-4 flex items-center"
            >
                <FormField
                    control={form.control}
                    name="searchType"
                    render={({ field }) => (
                        <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                        >
                            <SelectTrigger className="w-[100px]">
                                <SelectValue placeholder="All" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">All</SelectItem>
                                <SelectItem value="movie">Movie</SelectItem>
                                <SelectItem value="tv">TV</SelectItem>
                            </SelectContent>
                        </Select>
                    )}
                />

                <div className="w-full">
                    <FormField
                        control={form.control}
                        name="searchTerm"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Search IMDb"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    )
}

export default SearchForm
