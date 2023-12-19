import state from '../state/state'
import { useSnapshot } from 'valtio'
import supabase from './db'

const snap = useSnapshot(state)


export const getFolders = async () => {
    const { data, error } = await supabase
      .from('folders')
      .select('*')
      .eq('userId', localStorage.getItem('userId'))
    setFolders(data)
  }

export const deleteFolder = async () => {
  const { error } = await supabase
    .from('folders')
    .delete()
    .eq('id', snap.folderId)
  const { error2 } = await supabase
    .from('todos')
    .delete()
    .eq('folderId', snap.folderId)
  getFolders()
}
