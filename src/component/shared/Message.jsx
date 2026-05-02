"use client";

import { useState } from "react"; // State use korar jonno
import { Check, Envelope } from "@gravity-ui/icons";
import { Button, Form, Input, Label, Modal, Surface, TextField, FieldError } from "@heroui/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Message() {
    // Modal open ba close thakar jonno state
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmitfrom = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message")
        };

        console.log("Form Data:", data);

        // 1. Toast Message dekhano
        toast.success('Successfully sent to the Owner!', {
            position: "top-right",
            autoClose: 2000, // 2 second por auto close hobe
        });

        // 2. Form reset kora
        e.currentTarget.reset();

        // 3. Modal-ti close kora (khub alp somoy por jate user toast-ta dekhte pay)
        setTimeout(() => {
            setIsOpen(false);
        }, 500); 
    };

    return (
        <>
            {/* isOpen state diye modal control kora hoyeche */}
            <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
                <Button 
                    onPress={() => setIsOpen(true)} // Button click e open hobe
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold md:py-10 py-5 rounded-2xl shadow-lg shadow-emerald-200 transition-all active:scale-95 btn"
                >
                    Booking Now
                </Button>

                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <Envelope className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>Contact Us</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <Form onSubmit={handleSubmitfrom} className="flex w-full max-w-sm mx-auto flex-col gap-4">
                                        <TextField isRequired name="name" type="text">
                                            <Label>Name</Label>
                                            <Input placeholder="Enter your name" />
                                            <FieldError />
                                        </TextField>

                                        <TextField isRequired name="phone" type="tel">
                                            <Label>Phone Number</Label>
                                            <Input placeholder="Enter your Phone Number" />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                            isRequired
                                            name="email"
                                            type="email"
                                            validate={(value) => {
                                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                                    return "Please enter a valid email address";
                                                }
                                                return null;
                                            }}
                                        >
                                            <Label>Email</Label>
                                            <Input placeholder="john@example.com" />
                                            <FieldError />
                                        </TextField>

                                        <TextField className="w-full" name="message">
                                            <Label>Address</Label>
                                            <Input placeholder="Enter your address" />
                                        </TextField>

                                        <div className="flex gap-2">
                                            <Button type="submit" className={'btn bg-green-600 rounded-full text-white py-3'}>
                                                <Check />
                                                Sent message
                                            </Button>
                                            <Button type="reset" variant="secondary">
                                                Reset
                                            </Button>
                                        </div>
                                    </Form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>

            <ToastContainer />
        </>
    );
}