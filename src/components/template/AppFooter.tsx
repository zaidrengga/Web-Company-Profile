"use client"

import React from 'react'

const AppFooter = () => {
    return (
        <footer className="w-full bg-gray-800 text-white py-4 px-10">
            <div className="flex items-center justify-center py-4 gap-4">
                <div className="w-1/3 flex flex-col">
                    <h2 className="text-xl font-bold mb-2">LuminoTech</h2>
                    <p className="text-sm text-gray-400">Kami adalah tim profesional yang berdedikasi untuk memberikan solusi teknologi terbaik untuk bisnis Anda.</p>
                    <p className="text-sm text-gray-400 mt-2">Hubungi kami di: <a href="mailto:lumino@example.com" className="text-indigo-500 hover:underline">lumino@example.com</a></p>
                </div>
                
                <div className="w-1/3 flex flex-col items-center">
                    <h2 className="text-lg font-bold mb-2">Sosial Media</h2>
                    <div className="flex space-x-4">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">Instagram</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">Twitter</a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">Facebook</a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto text-center pt-4 border-t border-gray-700">
                <p className="text-sm">© {new Date().getFullYear()} LuminoTech. All rights reserved.</p>
                <p className="text-xs mt-2">Made with ❤️ by LuminoTech Team</p>
            </div>
        </footer>
    )
}

export default AppFooter