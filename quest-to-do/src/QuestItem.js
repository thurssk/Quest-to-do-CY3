import {useState} from "react"; 

export default function QuestItem({ props }) {
    const [title, setTitle] = useState(props.quest.title);
    const [checked, setChecked] = useState(false);
    const [editmode, setEditMode] = usestate(false);
    const concluded = props.quest.status === "concluido";

    return (
        <div classname="flex gap-4 flex-col md:flex-row items-center">
            <div className="flex gap-4 items-center w-full sm:w-[80%]"> 
                <input
                    disabled={concluded}
                    type="checkbox"
                    checked={checked}
                    classname="checkbox rounded-full border"
                />
                <p className="break-words">
                    {props.quest.title}
                </p>
            </div>

            {editmode && !conclued ? (
                <input
                 placeholder="quest"
                 defaultvalue={title}
                 onchange={(e) => setTitle(e.target.value)}
                classname="rounded-full bg-secundary pl-2 w-full input-sm flex focus:outline-none"
                />
            ) : (
                <p classname={`break-words ${concluded ? "line-through" : ""}`}>
                    {props.quest.title}
                </p>
            )}

            <div classname="flex gap-4 w-full sm:w-fit justify-center">
                <button onClick={() => setEditMode(!editmode)}>Editar</button>
                <button>Excluir</button>
            </div>
        </div>
    )
}