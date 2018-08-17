import { h } from 'preact'
import style from './style.css'

const Toggle = ({
  onChange,
  id,
  checked,
}: {
  onChange: JSX.GenericEventHandler
  id: string
  checked?: boolean
}) => (
  <div class={style.toggle}>
    <input id={id} type="checkbox" onChange={onChange} checked={checked} />
    <label for={id} />
  </div>
)

export default Toggle
