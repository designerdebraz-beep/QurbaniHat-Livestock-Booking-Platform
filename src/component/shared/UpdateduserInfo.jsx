"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";

export function UpdateduserInfo() {
    const [isOpen, setIsOpen] = useState(false);

    const onsubmitfrom = async (e) => {
        e.preventDefault();
        
        // Using FormData is the most reliable way to get values in JS
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const image = formData.get("image");

        try {
            // We await the update before closing the modal
            await authClient.updateUser({
                name: name,
                image: image
            });
            
            // Close the modal only after successful API call
            setIsOpen(false);
        } catch (error) {
            console.error("Update failed:", error);
            // You could add a state here to show an error message to the user
        }
    };

    return (
        <>
            <Button 
                onPress={() => setIsOpen(true)} 
                className="btn bg-green-600 rounded-4xl text-white py-3"
            >
                Update your info
            </Button>

            <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <Envelope className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>Update your Info</Modal.Heading>
                            </Modal.Header>
                            
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={onsubmitfrom} className="flex flex-col gap-4">
                                        <TextField className="w-full" name="name" type="text">
                                            <Label>Update your name</Label>
                                            <Input placeholder="Enter your name" />
                                        </TextField>

                                        <TextField className="w-full" name="image" type="url">
                                            <Label>Image Url</Label>
                                            <Input placeholder="Enter image URL" />
                                        </TextField>

                                        <div className="flex justify-end gap-2 mt-4">
                                            <Button 
                                                variant="secondary" 
                                                onPress={() => setIsOpen(false)}
                                                type="button"
                                            >
                                                Cancel
                                            </Button>
                                            <Button 
                                                className="btn bg-green-600 rounded-4xl text-white" 
                                                type="submit"
                                            >
                                                Save
                                            </Button>
                                        </div>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </>
    );
}