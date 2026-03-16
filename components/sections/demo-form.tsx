import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const formSchema = z.object({
  fullName: z.string().min(2, "Nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Teléfono debe tener al menos 10 dígitos"),
  restaurantName: z.string().min(2, "Nombre del restaurante requerido"),
  city: z.string().min(2, "Ciudad requerida"),
  locations: z.string(),
  interestedInCrypto: z.boolean().default(false),
})

type FormValues = z.infer<typeof formSchema>

interface DemoFormProps {
  onSuccess?: () => void
}

export default function DemoForm({ onSuccess }: DemoFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      locations: "1",
      interestedInCrypto: false,
    },
  })

  const onSubmit = async (values: FormValues) => {
    console.log(values)
    await new Promise((resolve) => setTimeout(resolve, 800))
    alert("¡Demo solicitada! Te contactaremos en 24 horas.")
    onSuccess?.()
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium">Nombre completo</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nombre completo"
                  {...field}
                  className="focus-visible:ring-2 focus-visible:ring-orange-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="tucorreo@restaurante.com"
                  {...field}
                  className="focus-visible:ring-2 focus-visible:ring-orange-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium">Teléfono</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="WhatsApp"
                  {...field}
                  className="focus-visible:ring-2 focus-visible:ring-orange-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="restaurantName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium">Nombre del restaurante</FormLabel>
              <FormControl>
                <Input
                  placeholder="Restaurante X"
                  {...field}
                  className="focus-visible:ring-2 focus-visible:ring-orange-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium">Ciudad</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ciudad"
                  {...field}
                  className="focus-visible:ring-2 focus-visible:ring-orange-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="locations"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium">¿Cuántas sucursales?</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="focus-visible:ring-2 focus-visible:ring-orange-500">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2-5">2-5</SelectItem>
                    <SelectItem value="6-10">6-10</SelectItem>
                    <SelectItem value="11+">11+</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="interestedInCrypto"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-3">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked ?? false)}
                />
              </FormControl>
              <div>
                <FormLabel className="text-gray-700 font-medium mb-0">
                  Me interesa aceptar pagos con criptomonedas
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold text-lg py-4 shadow-lg hover:shadow-xl transition-all"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting && (
            <span className="mr-3 inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          )}
          Solicitar Demo Gratis
        </Button>
      </form>
    </Form>
  )
}
