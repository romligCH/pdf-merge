// Type definitions for pdf-merge

declare namespace pdfMerge{
	interface Options{
		/** Should only be provided if pdftk is not in your PATH Optional! */
		libPath?: string
	}

	interface StreamOptions extends Options{
		/** Defaults to Buffer. Values Buffer, Stream, and path to a new file are accepted. Optional! */
		output: "Stream"
	}

	interface BufferOptions extends Options{
		/** Defaults to Buffer. Values Buffer, Stream, and path to a new file are accepted. Optional! */
		output?: "Buffer"|string
	}

	interface PDFMergeStatic {
		/**
		 * Merge multiple PDF Files into a single PDF document
		 * @param files is expected to be an array of files. Must be full path for each respective file.
		 * @param options library path and output type
		 */
		(files: string[], options: StreamOptions): Promise<ReadableStream>

		/** Merge multiple PDF Files into a single PDF document
		 * @param files is expected to be an array of files. Must be full path for each respective file.
		 * @param options library path and output type
		 */
		(files: string[], options?: BufferOptions): Promise<Buffer>
	}
}

declare const pdfMerge: pdfMerge.PDFMergeStatic
export = pdfMerge