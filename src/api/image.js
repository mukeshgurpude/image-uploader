import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.BUCKET, process.env.API_KEY)

export async function upload(image) {
  return supabase
    .storage
    .from('i')
    .upload(`${image.name}_${new Date().getTime()}`, image, {
      returning: 'minimal'
    })
}

export function get_url(path) {
  const { publicURL } =  supabase
    .storage
    .from('i')
    .getPublicUrl(path)
  return publicURL.replace('/i/i/', '/i/')
}
