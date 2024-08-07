import { describe, it, expect, vi } from "vitest";
import { postCreateAccount, loginUser } from "./api";
import { CreateAccountFields, FormLoginField } from "./validations";
 
describe("postCreateAccount", () => {
    it("should return user id on successful account creation", async () => {
        const mockAccountData: CreateAccountFields = {
            firstName: "firstnametest",
            lastName: "lastnametest",
            email: "emailtest@email.com",
            password: "Password123@",
            confirmPassword: "Password123@",
        };
 
        const mockResponse = {
            ok: true,
            json: vi.fn().mockResolvedValue([{ id: "123" }]),
        };
 
        global.fetch = vi
            .fn()
            .mockResolvedValueOnce(mockResponse)
            .mockResolvedValueOnce(mockResponse);
 
        const result = await postCreateAccount(mockAccountData);
 
        expect(result).toEqual({ data: "123", errors: "" });
        expect(global.fetch).toHaveBeenCalledTimes(2);
        expect(global.fetch).toHaveBeenCalledWith(
            "http://localhost:3000/accountData",
            expect.objectContaining({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(mockAccountData),
            })
        );
    });
 
    it("should return error message on failed account creation", async () => {
        const mockAccountData: CreateAccountFields = {
            firstName: "firstnametest",
            lastName: "lastnametest",
            email: "emailtest@email.com",
            password: "Password123@",
            confirmPassword: "Password123@",
        };
 
        const mockResponse = {
            ok: false,
            statusText: "Internal Server Error",
        };
 
        global.fetch = vi.fn().mockResolvedValueOnce(mockResponse);
 
        const result = await postCreateAccount(mockAccountData);
 
        expect(result).toEqual({ data: "", errors: "Internal Server Error" });
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(
            "http://localhost:3000/accountData",
            expect.objectContaining({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(mockAccountData),
            })
        ); 
    });
 
    it("should return error message on fetch exception", async () => {
        const mockAccountData: CreateAccountFields = {
            firstName: "firstnametest",
            lastName: "lastnametest",
            email: "emailtest@email.com",
            password: "Password123@",
            confirmPassword: "Password123@",
        };
 
        const mockError = new Error("Network Error");
 
        global.fetch = vi.fn().mockRejectedValueOnce(mockError);
 
        const result = await postCreateAccount(mockAccountData);
 
        expect(result).toEqual({ data: "", errors: "Network Error" });
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(
            "http://localhost:3000/accountData",
            expect.objectContaining({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(mockAccountData),
            })
        );
    });
});
 
describe("loginUser", () => {
    it("should return user id on successful login", async () => {
        const mockUserData: FormLoginField = {
            email: "emailtest@email.com",
            password: "Password123@",
        };
 
        const mockResponse = {
            ok: true,
            json: vi.fn().mockResolvedValue([
                { id: "123", email: "emailtest@email.com", password: "Password123@" },
            ]),
        };
 
        global.fetch = vi.fn().mockResolvedValueOnce(mockResponse);
 
        const result = await loginUser(mockUserData);
 
        expect(result).toEqual({ data: "123", error: "" });
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith("http://localhost:3000/accountData");
    });
 
    it("should return error message if user not found", async () => {
        const mockUserData: FormLoginField = {
            email: "emailtest@email.com",
            password: "Password123@",
        };
 
        const mockResponse = {
            ok: true,
            json: vi.fn().mockResolvedValue([]),
        };
 
        global.fetch = vi.fn().mockResolvedValueOnce(mockResponse);
 
        const result = await loginUser(mockUserData);
 
        expect(result).toEqual({
            data: "",
            errors: "User not found, please use an existent user or create a account!",
        });
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith("http://localhost:3000/accountData");
    });
 
    it("should return error message on fetch exception", async () => {
        const mockUserData: FormLoginField = {
            email: "emailtest@email.com",
            password: "Password123@",
        };
 
        const mockError = new Error("Network Error");
 
        global.fetch = vi.fn().mockRejectedValueOnce(mockError);
 
        const result = await loginUser(mockUserData);
 
        expect(result).toEqual({ errors: "Network Error" });
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith("http://localhost:3000/accountData");
    });
});