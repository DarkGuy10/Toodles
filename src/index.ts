import chalk from "chalk";

type LogLevel = "ERROR" | "SUCCESS" | "INFO" | "PROGRESS" | "WARN";

class Toodles {
	/**
	 * Colors for different log levels
	 * Based on the Catpuccin Mocha color pallete: https://github.com/catppuccin/catppuccin
	 */
	private _colorLevels = {
		INFO: chalk.hex("#89b4fa"),
		ERROR: chalk.hex("#f38ba8"),
		SUCCESS: chalk.hex("#a6e3a1"),
		PROGRESS: chalk.hex("#cba6f7"),
		WARN: chalk.hex("#f9e2af"),
	};

	/**
	 * Returns text blocks prepended to different types of messages
	 * @param logLevel Log level of the prefix
	 */
	prefix(logLevel: LogLevel): string {
		return `${chalk.grey("[")} ${this._colorLevels[logLevel].bold(
			logLevel
		)} ${chalk.grey("]")}`;
	}

	/**
	 * Print a plain message (same as console.log)
	 * @param message Message to print
	 */
	plain(message: unknown) {
		console.log(message);
	}

	/**
	 * Print an error message
	 * @param message Message to print
	 */
	error(message: unknown): void {
		console.log(`${this.prefix("ERROR")} ${this._colorLevels.ERROR(message)}`);
	}

	/**
	 * Print a success message
	 * @param message Message to print
	 */
	success(message: unknown): void {
		console.log(
			`${this.prefix("SUCCESS")} ${this._colorLevels.SUCCESS(message)}`
		);
	}

	/**
	 * Print an info message
	 * @param message Message to print
	 */
	info(message: unknown): void {
		console.log(`${this.prefix("INFO")} ${this._colorLevels.INFO(message)}`);
	}

	/**
	 * Print a warn message
	 * @param message Message to print
	 */
	warn(message: unknown): void {
		console.log(`${this.prefix("WARN")} ${this._colorLevels.WARN(message)}`);
	}

	/**
	 * Print a progress message
	 * @param message Message to print
	 */
	progress(message: unknown): void {
		console.log(
			`${this.prefix("PROGRESS")} ${this._colorLevels.PROGRESS(message)}`
		);
	}
}

export default Toodles;
export { LogLevel };
