"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import './_styles/admin.css';
import { db } from '@/utils/firebase';
import Logo from "@/app/_assets/Logo.png"
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import Image from 'next/image';
const AdminPage = () => {
    const [messages, setMessages] = useState([
        { id: '1', name: 'John Doe', email: 'john@example.com', message: 'Hello! I have a question.' },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com', message: 'I would like to know more about your services.' },
        { id: '3', name: 'Mark Johnson', email: 'mark@example.com', message: 'Can we schedule a meeting?' },
        { id: '4', name: 'Emily Davis', email: 'emily@example.com', message: 'Looking forward to working with you!' },
    ]);

    const [selectedMessage, setSelectedMessage] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();

    const correctPassword = 'admin123';

    useEffect(() => {
        const userPassword = window.prompt('Enter admin password:');
        if (userPassword === correctPassword) {
            setAuthenticated(true);
        } else {
            router.push('/');
        }
    }, []);
    const fetchContacts = async () => {
        try {
            const contactsCollection = collection(db, "contacts");
            const contactsSnapshot = await getDocs(contactsCollection);
            const contactsList = contactsSnapshot.docs.map(doc => {
                const data = doc.data();
                // Ensure the document has all the required fields, providing defaults if necessary
                return {
                    id: doc.id,
                    name: data.name || 'Unknown Name',
                    email: data.email || 'Unknown Email',
                    message: data.message || 'No message',

                };
            });

            console.log("Contacts:", contactsList);
            setMessages(contactsList);
            return contactsList;
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    };


    useEffect(() => {


        fetchContacts()
    }, []);

    const selectMessage = (msg) => {
        setSelectedMessage(msg);
    };

    // Fu
    const deleteMessage = async (id) => {
        const deletedMessage = messages.find((msg) => msg.id === id);
        const updatedMessages = messages.filter((msg) => msg.id !== id);
        const deletedMessageId = deletedMessage.id;
        await deleteDoc(doc(db, "contacts", deletedMessageId));
        // Delete message from database

        setMessages(updatedMessages);
        setSelectedMessage(null);
    };

    if (!authenticated) {
        return null;
    }


    const go2home = () => {
        window.location.href = '/';
    }
    return (
        <div className="admin-container">
            <Image src={Logo} alt="Logo" width={100} height={100} onClick={go2home} className='logo-admin' />
            <h1 className="admin-title">Admin Dashboard</h1>

            <div className="admin-content">
                {/* Sidebar for message list */}
                <div className="sidebar">
                    <h2>Messages</h2>
                    <ul className="message-list">
                        {messages.map((msg) => (
                            <li
                                key={msg.id}
                                className={`message-item ${selectedMessage && selectedMessage.id === msg.id ? 'active' : ''}`}
                                onClick={() => selectMessage(msg)}
                            >
                                <strong>{msg.name}</strong>
                                <p>{msg.email}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Message details view */}
                <div className="message-details">
                    {selectedMessage ? (
                        <div className="message-content">
                            <h2>{selectedMessage.name}</h2>
                            <p><strong>Email:</strong> {selectedMessage.email}</p>
                            <p><strong>Message:</strong> {selectedMessage.message}</p>
                            {/* Delete Button */}
                            <button className="delete-button" onClick={() => deleteMessage(selectedMessage.id)}>
                                Delete Message
                            </button>
                        </div>
                    ) : (
                        <p className="placeholder">Select a message to view details</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
