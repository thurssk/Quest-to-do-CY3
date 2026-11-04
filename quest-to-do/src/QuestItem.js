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
                    onchange={(e) => {
                        if (concluded) return;
                        else {
                            setChecked(!checked);
                            props.saveConcluded(props.quest);
                        }
                    }}
                />
                {editMode && !concluded ? (
                    <input
                        placeholder="quest"
                        defaultValue={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="rounded-full bg-secondary pl-2 w-full input-sm flex focus:outline-none"
                    />
                ) : (
                    <p className={`break-words ${concluded ? "line-through" : ""}`}>
                        {props.quest.title}
                    </p>
                )}
            </div>

          
            {!concluded && (
                <div classname="flex gap-4 w-full sm:w-fit justify-center">
                    <button onClick={() => {  if (editmode) props.saveEditQuest(props.quest, title); setEditMode(!editMode);
                     }}>Editar</button>
                    <button>Excluir</button>
                </div>
            )}
        </div>
    )
}