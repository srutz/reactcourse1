import { LucideSchool } from "lucide-react"
import { useNavigate } from "react-router"
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function Menu() {

  const exercises = [
    {
      name: "Exercise 1",
      path: "/exercise1",
    },
    {
      name: "Exercise 2",
      path: "/exercise2",
    },
  ]

  const navigate = useNavigate()

  const handleExercise = (exercise: { name: string; path: string }) => {
    navigate(exercise.path)
  }

  return (
    <Menubar className="h-[48px] border-b">
      <LucideSchool className="mr-4" />
      <div className="font-bold">CS-1001</div>
      <MenubarMenu>
        <MenubarTrigger>Main</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem onSelect={() => navigate("/")}>
              Main-Page
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem onSelect={() => {
              // open https://github.com/srutz/reactsolitaire in new tab
              window.open(
                "https://github.com/srutz/reactsolitaire",
                "_blank",
                "noopener,noreferrer"
              )
            }}>
              Solitaire
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Excercises</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            {exercises.map((exercise) => (
              <MenubarItem key={exercise.name} onSelect={() => handleExercise(exercise)}>
                {exercise.name}
              </MenubarItem>
            ))}
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar >
  )
}
