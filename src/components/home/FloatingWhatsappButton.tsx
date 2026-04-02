import { MessageCircle } from 'lucide-react'
import React from 'react'

const FloatingWhatsappButton = () => {
  return (
    <a
  href="https://wa.me/911234567890?text=Hi, I need help with visa consultation"
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed 
    bottom-6 
    right-6 
    z-50 
    bg-green-500 
    hover:bg-green-600 
    text-white 
    rounded-full 
    shadow-lg 
    w-14 
    h-14 
    flex 
    items-center 
    justify-center 
    transition 
    duration-300
  "
>
  <MessageCircle className="h-7 w-7" />
</a>

  )
}

export default FloatingWhatsappButton
