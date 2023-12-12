type LogLevel = "ERROR" | "SUCCESS" | "INFO" | "PROGRESS" | "WARN";

class Toodles {
	/**
	 * Print a plain message (same as console.log)
	 * @param message Message to print
	 */
	static plain(message: unknown) {
		console.log(message);
	}

	/**
	 * Print an error message
	 * @param message Message to print
	 */
	static error(message: unknown): void {
		console.log(`[90m[[39m [38;2;243;139;168m[1mERROR[22m[39m [90m][39m [38;2;243;139;168m${message}[39m`);
	}

	/**
	 * Print a success message
	 * @param message Message to print
	 */
	static success(message: unknown): void {
		console.log(`[90m[[39m [38;2;166;227;161m[1mSUCCESS[22m[39m [90m][39m [38;2;166;227;161m${message}[39m`);
	}

	/**
	 * Print an info message
	 * @param message Message to print
	 */
	static info(message: unknown): void {
		console.log(`[90m[[39m [38;2;163;185;239m[1mINFO[22m[39m [90m][39m [38;2;163;185;239m${message}[39m`);
	}

	/**
	 * Print a warn message
	 * @param message Message to print
	 */
	static warn(message: unknown): void {
		console.log(`[90m[[39m [38;2;249;226;175m[1mWARN[22m[39m [90m][39m [38;2;249;226;175m${message}[39m`);
	}

	/**
	 * Print a progress message
	 * @param message Message to print
	 */
	static progress(message: unknown): void {
		console.log(`[90m[[39m [38;2;203;166;247m[1mPROGRESS[22m[39m [90m][39m [38;2;203;166;247m${message}[39m`);
	}
}

export default Toodles;
export { LogLevel };
